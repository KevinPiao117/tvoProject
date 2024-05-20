# tvoProject
Automated Test for TVO website

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
Validates the number of buttons under the "On this page" section

Test 4
This tests the functionality of "Subscribe" buttton. When the button is clicked without any input, there should be a focus by the email input field, and the error line should pop up below the input field. When the subscribe button is clicked with a valid email address, a line that shows successful should appear.

Test 5
This test focus on the navigation bar of the current page in different resolutions, the preset resolution is 1920x1080, in this resolution the full navigation bar should be present. The resolution is then changed to the resolution of a mobile device, in this scenario, the navigation bar should be hidden and be replaced with the hamburger icon.

Test 6
This test validate the number of bullet points in the box next to the "Curriculum Overview". The box should contain a total of 6 elements, and the last element should be "Financial Literacy"

Test 7
This test validates the links under "Resources for Learning" section. The test clicks the first element which is "TVO Learn mPower", this should navigate to the "mpower.tvo.org..." url. Since cypress does not support tests that opens in a new tab, the target attribute from the link is removed so that it can open open the link in the current tab.

Test 8

This test focuses on the search bar, when the search icon is clicked, the search bar should become visible. After, "grade 6 math" is used as input, and when the search form is submitted, it should navigate to a new page which url contains "search" and the heading should include the input that was provided.
