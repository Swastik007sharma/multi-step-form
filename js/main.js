var currentStep = 1;
var sidebarActiveStep = 1;

const cssLink = document.getElementById("step_css");

const nextButton = document.getElementById("next");
const backButton = document.getElementById("back");
const confirmButton = document.getElementById("confirm");

const Step1Css = "css/step1.css";
const Step2Css = "css/step2.css";
const Step3Css = "css/step3.css";
const Step4Css = "css/step4.css";
const ThankCss = "css/thank.css";
const stepCssObj = {
	1: Step1Css,
	2: Step2Css,
	3: Step3Css,
	4: Step4Css,
	5: ThankCss,
};

activeStep(currentStep);

function activeStep(n) {
	sidebarActiveStep = document.querySelectorAll(".circle")[n - 1];
	sidebarActiveStep.classList.add("active-step");
}
function inactiveStep(n) {
	sidebarActiveStep = document.querySelectorAll(".circle")[n - 1];
	if (n >= 1 && n <= 3) {
		if (sidebarActiveStep.classList.contains("active-step")) {
			sidebarActiveStep.classList.remove("active-step");
		}
	}
}

function forwardStep(event) {
	event.preventDefault();
	inactiveStep(currentStep);
	cssLink.href = stepCssObj[++currentStep];
	activeStep(currentStep);
}

nextButton.addEventListener("click", forwardStep);
