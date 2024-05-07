
const gmailContent = (verificationToken) => {
  return `
    <h1 style="color: #008080; font-family: 'Arial', sans-serif; text-align: center;">Email Verification</h1>
    
    <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
      <p style="font-size: 16px; font-family: 'Arial', sans-serif; color: #444; text-align: center;">Click the button below to verify your email:</p>
      <div style="text-align: center; margin-top: 20px;">
        <a href="http://localhost:4000/api/v1/auth/verifyemail/${verificationToken}" style="display: inline-block; background-color: #008080; color: #fff; font-size: 18px; font-family: 'Arial', sans-serif; text-decoration: none; padding: 10px 20px; border-radius: 5px; border: 2px solid #008080; transition: background-color 0.3s ease-in-out;">
          Verify Email
        </a>
      </div>
    </div>
    `;

}
const OtpContent = (otpcode) => {
  return `
    <h1 style="color: #008080; font-family: 'Arial', sans-serif; text-align: center;">Entrepreneurs Connect</h1>
    <h1 style="color: #008080; font-family: 'Arial', sans-serif; text-align: center;">Reset Password</h1>
    <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
        <p style="font-size: 16px; font-family: 'Arial', sans-serif; color: #444; text-align: center;">Your OTP for resetting password is:</p>
        <div style="text-align: center; margin-top: 20px;">
            <h1>${otpcode}</h1>
        </div>
    </div>
    `;
}

const successFullVerification = () => {
  return `
  <h1 style="color: #008080; font-family: 'Arial', sans-serif; text-align: center;">Congratulations!</h1>
  <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
    <p style="font-size: 16px; font-family: 'Arial', sans-serif; color: #444; text-align: center;">You have successfully verified your email.</p>
    <div style="text-align: center; margin-top: 20px;">
      <a href="https://entrepreneursconnect.vercel.app/login" style="display: inline-block; background-color: #008080; color: #fff; font-size: 18px; font-family: 'Arial', sans-serif; text-decoration: none; padding: 10px 20px; border-radius: 5px; border: 2px solid #008080; transition: background-color 0.3s ease-in-out;">
        Go to Home Page
      </a>
    </div>
  </div>
`;
}


const promotionalEmail = (topUsers) => {
  const topUsersHTML = topUsers.map((user) => `
    <div style="border: 1px solid #ccc; border-radius: 5px; margin: 10px; padding: 10px; display: flex; align-items: center;">
      <a href="https://entrepreneursconnect.vercel.app/profile/${user._id}" style="text-decoration: none; color: inherit; display: flex; align-items: center; cursor:pointer">
        <img src="${user.avatar.url}" alt="${user.username}" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
        <div>
          <h2 style="font-size: 18px; color: #333;">${user.username}</h2>
          <p style="font-size: 16px; color: #777;">Points: ${user.points}</p>
        </div>
      </a>
    </div>
  `).join('');

  return `
    <div style="font-family: Arial, sans-serif; text-align: center;">
      <h1 style="color: #008080; font-size: 24px;">Entrepreneurs Connect</h1>
      <h2 style="color: #008080; font-size: 20px;">Top Users</h2>
      <div style="background-color: #f0f0f0; border-radius: 8px; padding: 20px;">
        <p style="font-size: 16px; color: #444;">Top Users of this week are:</p>
        <div style="margin-top: 20px;">
          ${topUsersHTML}
        </div>
      </div>
    </div>

    <div style="text-align: center; margin-top: 20px;">
      <a href="https://entrepreneursconnect.vercel.app/" style="display: inline-block; background-color: #008080; color: #fff; font-size: 18px; font-family: 'Arial', sans-serif; text-decoration: none; padding: 10px 20px; border-radius: 5px; border: 2px solid #008080; transition: background-color 0.3s ease-in-out;">
        Go to Home Page
      </a>
    </div>
  `;
};


module.exports = {
  gmailContent,
  OtpContent,
  successFullVerification,
  promotionalEmail
}

