# tvoProject
Automated Test for TVO website

Assuming the user has node.js and cypress installed. If not please follow the guide for installing node.js, npm, and cypress.
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
https://www.cypress.io/

Navigate to cypress_testing folder, open console and enter "npx cypress open". A new window should pop up. Choose E2E testing and run with any broswer.

The test cases all follow these intial setup
1. Visit https://tvolearn.com/
2. Navigate to the "Learning Resources (K-12)" dropdown from the header
3. Choose Grade 5 from the dropdown
4. Scroll down to the "Learn Forward in the Curriculum" section.
5. Click on Mathematics card

Every test is performed on a blank page with the above setups

Test 1
This test checks if the initial setup reached the desired page. The test validates the current url against the desired url of the page.

Test 2
This test focus on funtionality of the scroll to top button within the page. The test checks the visibility of the button at different positions of the page. At the top of the page the button should not be visible, and when the page is scrolled, the button should appear. When the button is clicked, the page should reset to be at the top, and the button should disappear.

Test 3
Validates the number of buttons under the "On this page" section, it should have 4 buttons. This test also checks the first and the last button which should say "Learning Activities" and "Vocabulary".


Test 4
This tests the functionality of "Subscribe" buttton. When the button is clicked without any input, there should be a focus by the email input field, and the error line should pop up below the input field. When the subscribe button is clicked with a valid email address, a line that shows successful should appear.

Test 5
This test focus on the navigation bar of the current page in different resolutions, the preset resolution is 1920x1080, in this resolution the full navigation bar should be present. The resolution is then changed to the resolution of a mobile device, in this scenario, the navigation bar should be hidden and be replaced with the hamburger icon.

Test 6
This test validate the number of bullet points in the box next to the "Curriculum Overview". The box should contain a total of 6 elements, the first element should contain "Social-Emotional Learning" and the last element should be "Financial Literacy"

Test 7
This test validates the game links under "Resources for Learning" section. The test finds the link that contains "Cyber-Siege" and checks if the link associated to this element is correct, the link should start with "mpower.tvo.org"

Test 8
This test validates the video links under "Resources for Learning" section. The test finds the link that contains "Algebraic Expressions" and checks if the link associated to this element is correct, the link should have "videos/algebraic-expressions". The link is then opened and the video is tested to see if it is playable.

Test 9
This test focuses on the search bar, when the search icon is clicked, the search bar should become visible. After, "grade 6 math" is used as input, and when the search form is submitted, it should navigate to a new page which url contains "search" and the heading should include the input that was provided.

Test 10
This test checks the french support for this page. The test looks for the "Français" button in the navigation bar and clicks it. The resulting page should contain "Mathematics" in french, which is "Mathématiques". However, this test failed due to the french button is hidden. Since the french button exist, the assumption of the webpage does support french is made. Then the french compatibility is tested from the home page. After every click in the setup procedures, french headings is validated. However, by the time it reaches the Mathematics page, the test failed and the language is changed back to english.
