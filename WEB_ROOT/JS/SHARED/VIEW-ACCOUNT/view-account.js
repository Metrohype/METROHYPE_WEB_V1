function menuClick() {
  let menu = document.getElementById('menu');
  let sidebar = document.getElementById('sidebar');

  if (sidebar.classList.contains('hidden')) {
    sidebar.classList.remove('hidden');
  } else {
    sidebar.classList.add('hidden');
  }
}
import { LoginAdvertiser, RegisterAdvertiser, GetAll } from "/WEB_ROOT/UTILITIES/FUNCTION_UTILIITIES/API/apiHelper.js";

export async function RegisterAdvertiser (advertiserFirstName, advertiserLastName,advertiserUserName,advertiserPhoneNumber,advertiserEmailAddress,advertiserStatus,advertiserPassword,advertiserConfirmPassword)  {
  try {
      const result = await RegisterAdvertiser  (advertiserFirstName, advertiserLastName,advertiserUserName,advertiserPhoneNumber,advertiserEmailAddress,advertiserStatus,advertiserPassword,advertiserConfirmPassword) ;
      console.log(result);

    const userContainer = document.getElementById("userInfo_Div")
    userContainer.innerHTML  `
    <h2>User Info</h2>
    <p><strong>Name:</strong> ${advertiserFirstName}</p>
    <p><strong>Email:</strong> ${advertiserEmailAddress}</p>
    <p><strong>Phone:</strong> ${advertiserUserName}</p>
    <p><strong>Address:</strong> ${advertiserPhoneNumber}</p>`
  } catch (error) {
      console.error("Error creating advertiser:", error);
  }
}