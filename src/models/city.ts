export class City {
    constructor(
      public name: string,
      public temperature: string,
      public description: string,
      public minTemp: string,
      public maxTemp: string,
      public weekWeather: WeakData[],
      public image :string,
      public wind :string,
      public humidity :string

    ) {}
  }

  export class WeakData {
    constructor(
      public day: string,
      public temperature: string,
      public description: string,
    ) {}
  }