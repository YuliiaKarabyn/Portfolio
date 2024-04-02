document.addEventListener("DOMContentLoaded", function () {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            var caseId = entry.target.id.replace('case_', ''); 
            var correspondingImage = document.querySelector('.case-image#case_' + caseId);

            if (entry.isIntersecting) {
                correspondingImage.style.opacity = 1;
            } else {
                correspondingImage.style.opacity = 0;
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.work-info').forEach(function(infoElement) {
        observer.observe(infoElement);
    });
});

		// Function to update the active section of the progress bar based on the current scroll position
		function updateProgressBar() {
			var scrollPosition = window.scrollY;
	
			// Set active section based on scroll position
			if (scrollPosition < window.innerHeight) {
				setActiveSection("hero-section");
			} else if (scrollPosition < 2 * window.innerHeight) {
				setActiveSection("about-section");
			} else if (scrollPosition < 3 * window.innerHeight) {
				setActiveSection("work-section");
			} else {
				setActiveSection("contact-section");
			}
		}
	
		// Function to set the active section and update the progress bar
		function setActiveSection(sectionId) {
			// Remove the 'active' class from all progress sections
			document.querySelectorAll('.progress-section').forEach(function (section) {
				section.classList.remove('active');
			});
	
			// Add the 'active' class to the specified section
			var activeSection = document.getElementById(sectionId);
			if (activeSection) {
				activeSection.classList.add('active');
			}
		}
	
		// Attach the updateProgressBar function to the scroll event
		window.addEventListener('scroll', updateProgressBar);
	
		// Initial update of the progress bar when the page loads
		window.addEventListener('load', updateProgressBar);