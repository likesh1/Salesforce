export class Product {
  constructor(public id: number,
              public  name: string,
              public price: string,
              public available: boolean,
              public best_seller: boolean,
              public img: string,
              public description: string) {
  }
}
