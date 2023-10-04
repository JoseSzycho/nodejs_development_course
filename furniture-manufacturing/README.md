# Custom Furniture Manufacturing API

The `Custom Furniture Manufacturing API System` provides an interface for integrating a bespoke ordering and manufacturing system into your business infrastructure.

This API **streamlines the process** for estimating production time, materials cost, labor cost and order progress tracking. Additionally, the API incorporates the materials purchasing time into the production time when materials are not available.

## Key features

- **Time estimation:** estimates an order production time based into;

  - materials purchasing time
  - production time for each manufacturing step

- **Cost calculation:** calculates an order cost based in;

  - materials using predefined material costs
  - labor using predefined cost structures

- **Progress tracking:** provide an order status based in:

  - reception of materials
  - actual manufacturing process step

- **Order management:**

  - provides information of all or individual orders
  - allows order cancellation or modification

- **Inventory management:**

  - manages inventory of materials and their associated cost and purchasing time
  - automatically adjust inventory when materials are used or reserved for an order

- **Manufacturing order placement:** accept and validates custom order placement based on;

  - material availability
  - pre existing labor structures
  - total production time
  - total manufacturing cost

- **Labor structure management:** manages labor structured cost based on:

  - labor time
  - labor cost

![](https://placehold.co/10x10/f03c15/f03c15.png) **`DELETE`**

![](https://placehold.co/15x15/1589F0/1589F0.png) **`GET`**

![](https://placehold.co/15x15/FF9933/FF9933.png) **`PUT`**

![](https://placehold.co/15x15/00DC0D/00DC0D.png) **`POST`**

![](https://placehold.co/15x15/EC01BE/EC01BE.png) **`PATCH`**

## API endpoints

### **inventory:** inventory operations

![](https://placehold.co/15x15/1589F0/1589F0.png) **`GET`** `/v1/inventory` Returns all inventory

![](https://placehold.co/15x15/00DC0D/00DC0D.png) **`POST`** `/v1/inventory` Creates a new material

![](https://placehold.co/15x15/1589F0/1589F0.png) **`GET`** `/v1/inventory/{materialID}` Returns a material by material ID

![](https://placehold.co/15x15/EC01BE/EC01BE.png) **`PATCH`** `/v1/inventory/{materialID}` Updates a material by material ID

### **labor:** labor operations

![](https://placehold.co/15x15/1589F0/1589F0.png) **`GET`** `/v1/labors` Returns all labors

![](https://placehold.co/15x15/00DC0D/00DC0D.png) **`POST`** `/v1/labors` Creates a new labor

![](https://placehold.co/15x15/1589F0/1589F0.png) **`GET`** `/v1/labors/{laborID}` Returns a labor by labor ID

![](https://placehold.co/15x15/EC01BE/EC01BE.png) **`PATCH`** `/v1/labors/{laborID}` Updates a labor by labor ID

### **orders** orders operations

![](https://placehold.co/15x15/1589F0/1589F0.png) **`GET`** `/v1/orders` Returns all manufacture orders

![](https://placehold.co/15x15/00DC0D/00DC0D.png) **`POST`** `/v1/order` Creates a new manufacture order

![](https://placehold.co/15x15/1589F0/1589F0.png) **`GET`** `/v1/orders/{orderID}` Returns a manufacture order by manufacture order ID

![](https://placehold.co/15x15/EC01BE/EC01BE.png) **`PATCH`** `/v1/orders/{orderID}` Update a manufacture order by manufacture order ID

![](https://placehold.co/10x10/f03c15/f03c15.png) **`DELETE`** `/v1/orders/{orderID}` Delete an unplaced manufacture order by manufacture order ID