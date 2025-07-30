document.addEventListener('DOMContentLoaded', function() {
 
    const notouchElement = document.querySelector('.notouch');

    if (notouchElement) {

        notouchElement.addEventListener('click', function() {
            
           
            notouchElement.classList.add('active');

            
            alert('下次别按了');

          
            setTimeout(function() {
                notouchElement.classList.remove('active');
            }, 300); 

        });
    }
});