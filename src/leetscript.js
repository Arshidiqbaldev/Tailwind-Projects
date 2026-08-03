document.addEventListener("DOMContentLoaded", function () {


    const usernameInput = document.getElementById("username");
    const searchBtn = document.getElementById("search");
    const easyDiv = document.querySelector(".easy-parent");
    const mediumDiv = document.querySelector(".medium-parent");
    const hardDiv = document.querySelector(".hard-parent");
    const easyTag = document.getElementById("easy");
    const mediumTag = document.getElementById("medium");
    const hardTag = document.getElementById("hard");



    function validateUsername(username) {
        if (username.trim() === "") {
            alert("username should not be empty");
            return false;
        }

        const regex = /^[a-zA-Z0-9_-]{1,15}$/;

        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("invelid username");
        }

        return isMatching;

    }


    async function fetchUserDetails(username) {

        try {

            searchBtn.textContent = "searching...";
            searchBtn.disabled = true;


            const proxyUrl = "https://cors-anywhere.herokuapp.com/";
            const targetUrl = "https://leetcode.com/graphql/";
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                "variables": {
                    "username": `${username}`
                }
            });

            const requestOption = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
                redirect: "follow"
            };

            const response = await fetch(proxyUrl + targetUrl, requestOption);



            if (!response.ok) {
                throw new Error("unable to fetch data")
            }

            const userData = await response.json();
            console.log(userData);

            displayUserData(userData);





        } catch (error) {

        }

        finally {


            searchBtn.textContent = "search";
            searchBtn.disabled = false;

        }




    };



    function updateProgress(solved, total, parentDiv, tag) {


        const progressDegree = (solved / total) * 100;

        parentDiv.style.setProperty("--progress-degree", `${progressDegree}%`);

        tag.textContent = `${solved}/${total}`;


    }









    function displayUserData(userData) {
        const totalQues = userData.data.allQuestionsCount[0].count;
        const totalEasyQues = userData.data.allQuestionsCount[1].count;
        const totalMediumQues = userData.data.allQuestionsCount[2].count;
        const totalHardQues = userData.data.allQuestionsCount[3].count;


        const totalSolvedQues = userData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const totalSolvedEasyQues = userData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const totalSolvedMediumQues = userData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const totalSolvedHardQues = userData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(totalSolvedEasyQues, totalEasyQues, easyDiv, easyTag);
        updateProgress(totalSolvedMediumQues, totalMediumQues, mediumDiv, mediumTag);
        updateProgress(totalSolvedHardQues, totalHardQues, hardDiv, hardTag);
    }




    searchBtn.addEventListener("click", function () {
        const username = usernameInput.value;
        console.log(username);

        if (validateUsername(username)) {

            fetchUserDetails(username)

        }
    })








});