import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: string;

  constructor(private router: Router, private us: UserService, private ls: LoginService) {
    this.getUser();
  }

  ngOnInit(): void {
    feather.replace();
    this.loadScript();
  }

  private getUser() {
    const id = sessionStorage.getItem('_id');
    this.us.getItem(id, ['name']).subscribe(() => {
      this.user = this.us.item.user.name;
      if (!this.user) {
        this.router.navigate(['/login']);
      }
    });
  }

  logOut() {
    this.ls.logOut();
  }

  private loadScript() {
    $('.topbar .navbar').addClass('navbar-light');


    $('.theme-color .theme-item .theme-link').on('click', function() {
      const sidebarbgskin = $(this).attr('data-sidebarbg');
      $('.left-sidebar').attr('data-sidebarbg', sidebarbgskin);
      $('.scroll-sidebar').attr('data-sidebarbg', sidebarbgskin);
    });

    $('.message-center, .customizer-body, .scrollable, .scroll-sidebar').perfectScrollbar({
      wheelPropagation: !0
    });


    function setsidebartype() {
      const width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
      if (width < 1170) {
        $('#main-wrapper').attr('data-sidebartype', 'mini-sidebar');
        $('#main-wrapper').addClass('mini-sidebar');
      } else {
        $('#main-wrapper').attr('data-sidebartype', 'full');
        $('#main-wrapper').removeClass('mini-sidebar');
      }
    }

    $(window).ready(setsidebartype);
    $(window).on('resize', setsidebartype);

    const element = $('ul#sidebarnav a activo');
    element.parentsUntil('.sidebar-nav').each(function(index) {
      if ($(this).is('li') && $(this).children('a').length !== 0) {
        $(this).children('a').addClass('active');
        $(this).parent('ul#sidebarnav').length === 0 ?
          $(this).addClass('active') :
          $(this).addClass('selected');
      } else if (!$(this).is('ul') && $(this).children('a').length === 0) {
        $(this).addClass('selected');

      } else if ($(this).is('ul')) {
        $(this).addClass('in');
      }

    });

    element.addClass('active');
    $('#sidebarnav a').on('click', function(e) {

      if (!$(this).hasClass('active')) {
        // hide any open menus and remove all other classes
        $('ul', $(this).parents('ul:first')).removeClass('in');
        $('a', $(this).parents('ul:first')).removeClass('active');

        // open our new menu and add the open class
        $(this).next('ul').addClass('in');
        $(this).addClass('active');

      } else if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).parents('ul:first').removeClass('active');
        $(this).next('ul').removeClass('in');
      }
    });
    $('#sidebarnav >li >a.has-arrow').on('click', (ev) => {
      ev.preventDefault();
    });

    $('body, .page-wrapper').trigger('resize');
    $('.page-wrapper').delay(20).show();
  }

}
