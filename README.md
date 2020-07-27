# Lab-33 - Redux Store

## [Codesandbox](https://codesandbox.io/s/github/claytonjones-401n16/redux-store/tree/rtk)

## [Deployed](https://nostalgic-noyce-638628.netlify.app/)

## How it works

### This application, built with React Redux, simulates an online store.  
### It retrieves inventory from a database, including stock and price.
### There is a `View Details` and `Add to Cart` button on each item.
### The cart updates in real time, including updating the database inventory when items are added/removed. The `Add to Cart` button will be disabled momentarily on each click, to prevent multiple quick clicks. The site can only process a single `put` request at a time. This maintains accurate information to be shown to the user regarding current stock.
### Right now if you refresh the page with items in the cart, they are not added back to the inventory, so it's possible to deplete the stock entirely.
### By clicking the cart in the top right corner, you are brought to a cart summary page where you can simulate a purchase. Right now the `Place Order` button does not do anything, and nothing from the form is being saved on submit.