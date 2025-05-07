import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { GeneroService } from '../../services/genero.service';
import { Router } from '@angular/router';
import { Genero } from '../../models/genero.model';

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

    constructor(private generoService: GeneroService, private router: Router) { }

    ngOnInit() {
        this.generoService.getGeneros().subscribe(response => {
            const categorias = response.genres.map((genre: Genero) => ({
                label: genre.name,
                command: () => this.router.navigate(['/movies/genero', genre.id])
            }));

            this.items = [
                {
                    label: 'Início',
                    icon: 'pi pi-home',
                    routerLink: ['/']
                },
                {
                    label: 'Categorias',
                    icon: 'pi pi-th-large',
                    items: categorias
                },
                {
                    label: 'Sobre',
                    icon: 'pi pi-info-circle'
                }
            ];
        });
    }

    toggleDarkMode() {
        const element = document.querySelector('html');
        if (element) {
            element.classList.toggle('my-app-dark');
        }
    }
}
