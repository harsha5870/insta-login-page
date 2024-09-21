// FAQ data
const faqData = [
    {
        question: "How do I reset my password?",
        answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions to reset your password."
    },
    {
        question: "How can I delete my account?",
        answer: "To delete your account, go to your account settings and select 'Delete Account'. Follow the instructions to permanently delete your account."
    },
    {
        question: "How do I report a problem?",
        answer: "To report a problem, go to the 'Help & Support' section in the app settings. Select the appropriate category and describe the issue you're experiencing."
    }
];

// Function to generate FAQ items
function generateFAQ() {
    const faqContainer = document.getElementById('faq');

    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('question');
        faqItem.innerHTML = `
            <h2>${item.question}</h2>
            <p class="answer">${item.answer}</p>
        `;
        faqContainer.appendChild(faqItem);
    });
}

// Generate FAQ
generateFAQ();
