import { Injectable } from '@angular/core';
import {HousingLocationInfo} from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  //readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  readonly baseUrl = 'https://simplecloudservlet.github.io/repositoriomuseu/assets';
  housingLocationList: HousingLocationInfo[] = [
    {
      id: 0,
      name: 'Logo do EcoMuseu',
      city: 'Apucarana',
      state: 'PR',
      photo: `${this.baseUrl}/LOGOECOMUSEU.png`,
      data: '07/11/2023',
      info: 'Logomarca do Ecomuseu do Bone. Símbolo de um boné dentro de um círculo com os dizeres: ecomuseu, em cima da figura, e bone, abaixo da figura'
    },
    {
      id: 1,
      name: 'Foto do Museu',
      city: 'Apucarana',
      state: 'PR',
      photo: `${this.baseUrl}/fotos/foto_2022_05_09_at_15_00_13.png`,
      data: '20/05/2022',
      info: 'Foto'
    },
    {
      id: 2,
      name: 'Foto de Bonés',
      city: 'Apucarana',
      state: 'PR',
      photo: `${this.baseUrl}/fotos/foto_2022_05_09_at_15_00_24.png`,
      data: '09/05/2022',
      info: 'Foto'
    },
    {
      id: 3,
      name: 'Foto de Bonés',
      city: 'Apucarana',
      state: 'PR',
      photo: `${this.baseUrl}/fotos/foto_2022_05_20_at_11_15_46.png`,
      data: '20/05/2022',
      info: 'Foto'
    },
    {
      id: 4,
      name: 'Vídeo de Bonés',
      city: 'Apucarana',
      state: 'PR',
      photo: `${this.baseUrl}/videos/video_2024_09_01_at_13_16_36.mp4`,
      data: '01/09/2024',
      info: 'Video de Bonés de Apucarana'
    }
    
  ];

  getAllHousingLocations(): HousingLocationInfo[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocationInfo | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
