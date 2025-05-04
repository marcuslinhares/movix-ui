import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'menu-bar',
    standalone: true,
    imports: [Menubar, ButtonModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Início',
                icon: 'pi pi-home',
                routerLink: ['/']
            },
            {
                label: 'Categorias',
                icon: 'pi pi-th-large',
                items: [
                    { label: 'Ação', routerLink: ['/genero/acao'] },
                    { label: 'Comédia', routerLink: ['/genero/comedia'] },
                    { label: 'Drama', routerLink: ['/genero/drama'] },
                ]
            },
            {
                label: 'Sobre',
                icon: 'pi pi-info-circle'
            }
        ];
    }


    toggleDarkMode() {
        const element = document.querySelector('html');
        if (element) {
            element.classList.toggle('my-app-dark');
        }
    }

}
