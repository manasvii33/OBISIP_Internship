document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const count = parseFloat(counter.innerText);
            
            // Adjust speed: higher divisor = slower animation
            const increment = target / 50; 

            if (count < target) {
                if (target % 1 !== 0) {
                    // For decimals like ODI average
                    counter.innerText = (count + increment).toFixed(2);
                } else {
                    // For whole numbers like Runs
                    counter.innerText = Math.ceil(count + increment);
                }
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        updateCount();
    });
});