document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.accordion-header');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            const contentId = trigger.getAttribute('aria-controls');
            const content = document.getElementById(contentId);

            // Close all other accordions
            triggers.forEach(otherTrigger => {
                if (otherTrigger !== trigger) {
                    otherTrigger.setAttribute('aria-expanded', 'false');
                    const otherContentId = otherTrigger.getAttribute('aria-controls');
                    const otherContent = document.getElementById(otherContentId);
                    if (otherContent) {
                        otherContent.hidden = true;
                    }
                }
            });

            // Toggle current
            trigger.setAttribute('aria-expanded', !isExpanded);

            if (content) {
                content.hidden = isExpanded; // If it was expanded, it becomes hidden (true)
            }
        });
    });

    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
