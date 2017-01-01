using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HelloWorld
{
  class program
{
    static void Main(string[] args)
  {/*
  	Console.WriteLine("Please type something and press enter");
  	string userValue;
  	userValue = Console.ReadLine();
  	Console.WriteLine("You typed: " + userValue);
  	Console.ReadLine(); */

  	Console.WriteLine("Would you prefer what is behind door number 1, 2, or 3?");
  	string userValue = Console.ReadLine();
  	if(userValue == "1"){
  		Console.WriteLine("You won a new car!");
  		Console.ReadLine();
  	}
  	else if(userValue == "2"){
  		Console.WriteLine("You won a new boat!");
  		Console.ReadLine();
  	}
  	else if(userValue == "3"){
  		Console.WriteLine("You won a new cat!");
  		Console.ReadLine();
  	}
  	else {
  		Console.WriteLine("Sorry, we didn't understand. You lose!");
  		Console.ReadLine();
  	}
  }
}
}
