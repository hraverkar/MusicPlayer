import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public msaapDisplayTitle = true;
  public msaapDisplayPlayList = true;
  public msaapPageSizeOptions = [2, 4, 6];
  public msaapDisplayVolumeControls = true;
  public pageSizeOptions: 10;
  public msaapPlaylist: Track[] = [
    {
      link:
        'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
      title: 'First',
    },
  ];
  public alink =
    'https://ia801009.us.archive.org/8/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/';
  public data: any;
  public mest: any = [];
  constructor(private dataService: DataService) {
    this.getData();
  }

  ngOnInit(): void {}
  onEnded(change) {}

  getData() {
    this.dataService.getMusicgData().subscribe((res) => {
      this.getAllList(res.body.files.file);
    });
  }

  getAllList(data: any) {
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i][`-name`].endsWith('.mp3')) {
        this.mest.push({
          title: data[i]['-name'],
          link: this.alink + data[i]['-name'],
        });
      }
    }
    this.msaapPlaylist = this.mest;
  }
}
