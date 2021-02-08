const URL = "http://127.0.0.1:3000";

window.addEventListener("load", function () {
  const quantity = document.querySelector("select");
  const btnAddToCart = document.getElementById("btn-agregar-carrito");

  btnAddToCart.addEventListener("click", function () {
    console.log("click");
    /* 
    obtener el productId(agregarlo al formulario tag oculto)

    Obtener userid
      -> sacar del tag p, class -> userId
    
    obtener el cartId del user(consultar x api)
      -> http://localhost:3000/api/cart/user/:userId
     */

    const productId = document.getElementById("productId").innerHTML;
    const userId = document.getElementById("userId").innerHTML;
    const price = document.getElementById("precio1").innerHTML;
    console.log(productId);
    console.log(userId);

    config = {
      method: "get",
      url: `${URL}/api/cart/user/${userId}`,
    };

    axios(config)
      .then((cart) => {
        if (cart.data.data.cart.length > 0) {
          console.log("mayor a cero");
          console.log(cart.data.data.cart[0].id);
          config = {
            method: "post",
            url: `${URL}/api/cart/item`,
            data: {
              product_id: productId,
              quantity: 1,
              cart_id: cart.data.data.cart[0].id,
              price: price,
            },
          };
          axios(config).then((response) => {
            console.log(response);
            window.location.href = "/cart";
          });
        } else {
          console.log("carrito not found");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
