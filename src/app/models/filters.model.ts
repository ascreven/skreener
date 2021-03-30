export class Filter {
  constructor(
    public options: any[],
    public title: string,
    public isVisible: boolean = true,
    public id: string = "id",
    public name: string = "name") {}

}
