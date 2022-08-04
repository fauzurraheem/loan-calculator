//listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    //show loader
    document.getElementById('loading').style.display = 'block';
    //hide results
    document.getElementById('results').style.display = 'none';

    setTimeout(calculateResults, 2000);


    e.preventDefault();
});

//calculate Results
function calculateResults(){
    console.log('calkdkd');


    //ui variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //computed monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

       
        //show results
        document.getElementById('results').style.display = 'block';

        //hide loader
        document.getElementById('loading').style.display = 'none';
    

    } else{
        showError('please check your numbers');
    }

   
}


function showError(error){


    //hide results
    document.getElementById('results').style.display = 'none';

    //hide loader
    document.getElementById('loading').style.display = 'none';

    //create error div
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add a class name
    errorDiv.className = 'alert alert-danger';
    // create textnode
    errorDiv.appendChild(document.createTextNode(error));

    //insert error above heading
    card.insertBefore(errorDiv, heading);

    //clear error after 3 seconds
    setTimeout(clearError, 3000);
}


// clear error
function clearError(){
    document.querySelector('.alert').remove();
}

















































