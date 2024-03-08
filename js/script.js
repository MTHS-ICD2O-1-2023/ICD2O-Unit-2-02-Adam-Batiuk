// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  document.getElementById("area").innerHTML = "Area is: " + (5 * 3) + " cm²"
  document.getElementById("perimeter").innerHTML = "Perimeter is: " + (2 * (5 + 3)) + " cm"
}