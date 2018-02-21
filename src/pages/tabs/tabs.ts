import { IntroPage } from './../intro/intro';
import { FeedPage } from './../feed/feed';
import { Component } from '@angular/core';

import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IntroPage;
  tab2Root = HomePage;
  tab3Root = FeedPage;
  constructor() {

  }
}
