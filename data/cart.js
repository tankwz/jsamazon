export const cart=[{
  productId:'83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
  quantity: 2
},{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 2
}

];

export function addToCart( productId){
  
  let itemName=0;
  cart.forEach((item) =>{
    if (item.productId === productId)
      itemName = item;
  })
  if (itemName){
    itemName.quantity++;
  }
  else {
    cart.push({
      productId : productId,
      quantity :1  
    })
  }
}


