import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  discover = "Discover";
  search = "Search";
  upload = "Upload Picture";
  chat = "Chat";
  profile = "Profile";
  selected = "selected";
  unselected = "unselected";
  ImgDiscover = '../../assets/Icons/houseSelected.png';
  ImgSearch = "../../assets/Icons/searchUnselected.png";
  ImgUpload = "../../assets/Icons/uploadUnselected.png";
  ImgChat = "../../assets/Icons/chatUnselected.png";
  ImgProfile = "../../assets/Icons/profileUnselected.png";
}
