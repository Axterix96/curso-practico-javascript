// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const coupons = [
        {
            name: "cupon",
            discount: 15,
        },
        {
            name: "cupon2",
            discount: 30,
        },
        {
            name: "cupon3",
            discount: 25,
        },
    ];

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
    alert("El cupón " + couponValue + "no es válido");
    }else{
        const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }



}



