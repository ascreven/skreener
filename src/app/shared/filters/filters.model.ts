export class Filter {
  constructor(
    public options: any[],
    public title: string,
    public id: string,
    public optionId: string = "id",
    public isVisible: boolean = true,
    public name: string = "name") {}
}
