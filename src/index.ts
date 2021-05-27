export class MyClass {
  public id!: string;
  public firstName?: string;
  public lastName?: string;

  sayName = () => {
    return console.log("my name is" + this.firstName + this.lastName);
  };
}
