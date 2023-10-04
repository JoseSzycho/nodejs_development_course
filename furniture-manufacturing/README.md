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

![](https://placehold.co/15x15/00DC0D/00DC0D.png) **POST**

![](https://placehold.co/15x15/00DC7F/00DC7F.png) **PATCH**
