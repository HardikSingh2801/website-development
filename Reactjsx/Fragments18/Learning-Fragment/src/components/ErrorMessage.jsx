const ErrorMessage = () => {
    let fooditems = ['Daal','Green Vegetables','Roti','Salad','Milk','ghee'];

    return <>
        {fooditems.length === 0 && <h3> I am still hungry </h3>}
    </>;
}

export default ErrorMessage;