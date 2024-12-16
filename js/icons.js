const githubIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_51)">
<path d="M18 38C8 41 8 33 4 32M32 44V36.26C32.075 35.3063 31.9462 34.3476 31.622 33.4476C31.2979 32.5476 30.7859 31.7268 30.12 31.04C36.4 30.34 43 27.96 43 17.04C42.9995 14.2477 41.9254 11.5624 40 9.54C40.9117 7.09701 40.8472 4.3967 39.82 2C39.82 2 37.46 1.3 32 4.96C27.416 3.71764 22.584 3.71764 18 4.96C12.54 1.3 10.18 2 10.18 2C9.15275 4.3967 9.08829 7.09701 10 9.54C8.06025 11.5774 6.98505 14.2869 7 17.1C7 27.94 13.6 30.32 19.88 31.1C19.222 31.7799 18.7145 32.5908 18.3906 33.4798C18.0667 34.3689 17.9336 35.3161 18 36.26V44" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_51">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>`;

const linkedinIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 16C35.1826 16 38.2348 17.2643 40.4853 19.5147C42.7357 21.7652 44 24.8174 44 28V42H36V28C36 26.9391 35.5786 25.9217 34.8284 25.1716C34.0783 24.4214 33.0609 24 32 24C30.9391 24 29.9217 24.4214 29.1716 25.1716C28.4214 25.9217 28 26.9391 28 28V42H20V28C20 24.8174 21.2643 21.7652 23.5147 19.5147C25.7652 17.2643 28.8174 16 32 16Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18H4V42H12V18Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const emailIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44 12C44 9.8 42.2 8 40 8H8C5.8 8 4 9.8 4 12M44 12V36C44 38.2 42.2 40 40 40H8C5.8 40 4 38.2 4 36V12M44 12L24 26L4 12" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const resumeIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.88 22.1L24.5 40.48C22.2483 42.7317 19.1944 43.9967 16.01 43.9967C12.8256 43.9967 9.77169 42.7317 7.52 40.48C5.26831 38.2283 4.00333 35.1744 4.00333 31.99C4.00333 28.8056 5.26831 25.7517 7.52 23.5L25.9 5.12001C27.4011 3.61888 29.4371 2.77556 31.56 2.77556C33.6829 2.77556 35.7189 3.61888 37.22 5.12001C38.7211 6.62113 39.5644 8.65709 39.5644 10.78C39.5644 12.9029 38.7211 14.9389 37.22 16.44L18.82 34.82C18.0694 35.5706 17.0515 35.9922 15.99 35.9922C14.9285 35.9922 13.9106 35.5706 13.16 34.82C12.4094 34.0694 11.9878 33.0515 11.9878 31.99C11.9878 30.9286 12.4094 29.9106 13.16 29.16L30.14 12.2" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`


document.getElementById('githubIcon').innerHTML = githubIcon;
document.getElementById('linkedinIcon').innerHTML = linkedinIcon;
document.getElementById('emailIcon').innerHTML = emailIcon;
document.getElementById('resumeIcon').innerHTML = resumeIcon;
