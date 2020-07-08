import { Component, OnInit } from "@angular/core";
import { Course } from "./course/course";


@Component({
    selector: 'app-course-list',
    templateUrl: './course-list-component.html'
   
})
export class CourseListComponent implements OnInit{

    courses: Course[] = []

    ngOnInit(): void{
        this.courses =[
            { id: 1,
                name: 'Angular',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'xps-98796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'december, 5, 2020'

            },
            { id: 2,
                name: 'React',
                imageUrl: '/assets/images/http.png',
                price: 34.99,
                code: 'zpu-97786',
                duration: 100,
                rating: 6.9,
                releaseDate: 'august, 15, 2019'

            }

        ]
    }

}