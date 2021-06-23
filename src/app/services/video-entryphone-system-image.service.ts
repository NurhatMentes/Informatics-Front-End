import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { VideoEntryphoneSystemImage } from '../models/videoEntryphoneSystemImage';

@Injectable({
  providedIn: 'root'
})
export class VideoEntryphoneSystemImageService {
  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient: HttpClient) { }


  getVideoEntryphoneImages(): Observable<ListResponseModel<VideoEntryphoneSystemImage>> {
    let newPath = this.apiUrl + "VideoEntryphoneImages/getall";
    return this.httpClient.get<ListResponseModel<VideoEntryphoneSystemImage>>(newPath);
  }

  getVideoEntryphoneImagesById(id: number): Observable<ListResponseModel<VideoEntryphoneSystemImage>> {
    let newPath = this.apiUrl + 'VideoEntryphoneImages/getimagesbyvideoentryphoneid?=' + id;
    return this.httpClient.get<ListResponseModel<VideoEntryphoneSystemImage>>(newPath);
  }

  addProduct(videoEntryphoneSystemImage: VideoEntryphoneSystemImage): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "VideoEntryphoneImages/add", videoEntryphoneSystemImage)
  }




  upload(ImageAdd: VideoEntryphoneSystemImage): Observable<ResponseModel> {
    let newPath = this.apiUrl + "VideoEntryphoneImages";
    return this.httpClient.post<ResponseModel>(newPath, ImageAdd);
  }

  updated(imageAdd: VideoEntryphoneSystemImage): Observable<ResponseModel> {
    let newPath = this.apiUrl + "VideoEntryphoneImages/add";
    return this.httpClient.post<ResponseModel>(newPath, imageAdd);
  }
}
