import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

@Component({
    selector: 'menu-bar',
    standalone: true,
    imports: [Menubar, ButtonModule, FormsModule, InputTextModule, MenubarModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
    items: MenuItem[] | undefined;
    searchQuery: string = '';

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
