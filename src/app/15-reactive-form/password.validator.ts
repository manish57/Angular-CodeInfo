import { AbstractControl } from '@angular/forms';

//This is a custom validator to check passwords. 
//The class can contain multiple methods for validation.
//The following class has just one validation method. 

export class PasswordValidators {
    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('password');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value){
            return { passwordsShouldMatch: true };
        }
        
        return null;
    }
}