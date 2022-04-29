import { v4 as uuidV4 } from 'uuid'

class Category{
  Id?: string;
  Name: string;
  Description: string;
  Created_at?: Date;

  constructor(public name: string, public description: string){
    this.Id = uuidV4();
    name = this.Name ;
    description = this.Description;
    this.Created_at = new Date();
  }
}

export { Category }