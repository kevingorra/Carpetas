/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package ejercicio10;
import java.util.Scanner;
/**
 *
 * @author 308
 */
public class Ejercicio10 
{

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) 
    {
        // instanciar la clase
        Scanner objLector = new Scanner(System.in);
        //declaracion de variable
        String nom;
        int cm;
        float vrmat, vrbto, recargo , descuento, vrnto;
        
        System.out.print("digite el nombre: ");
        nom = objLector.next();
        System.out.print("cantidad de materias:");
        cm = objLector.nextInt();
        System.out.print("valor de la materia:");
        vrmat = objLector.nextFloat();
        vrbto = cm * vrmat;
        recargo = 28000;
        descuento = vrbto *20/100;
        vrnto = vrbto + recargo - descuento;
        System.out.println();
        System.out.println(nom);
        System.out.println("valor materias: $ " + vrbto);
        System.out.println("valor recargo: $" + recargo);
        System.out.println("descuento: $" + descuento);
        System.out.println("valor a pagar: $" + vrnto);
        
        
        
        
        
        
    }
    
}
