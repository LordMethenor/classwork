//defines array
var names = ["Daniel","John","Jane"];
var x

//removes last item and puts it in x
x = names.pop();
//output x: Jane
//output names: ["Daniel","John"]
//output names[2]: undefined
names = ["Daniel","John","Jane"];

//removes first item and puts it in x
x = names.shift();
//output x: Daniel
//output names: ["John","Jane"]
names = ["Daniel","John","Jane"];

//inserts item into the last spot and outputs the number of values
x = names.push("Frida");
//output x: 4
//output names = ["Daniel","John","Jane","Frida"]
names = ["Daniel","John","Jane"];

//inserts item into the first spot and outputs the number of values
x = names.unshift("Frida");
//output x: 4
//output names = ["Frida","Daniel","John","Jane"]
names = ["Daniel","John","Jane"];

//replaces first item (index 0 with Nick)
names[0] = "Nick";
//output names[0]: Nick
//output names = ["Nick","John","Jane"]
names = ["Daniel","John","Jane"];

//splice(first to delete, number to delete, what to insert at/before first to delete position, etc...), outputs removed values
//starting at index 1, 0 values are deleted, and Frida and Bella are inserted before index 1
names.splice(1,0,"Frida","Bella");
//output names = ["Daniel","Frida","Bella","John","Jane"]
names = ["Daniel","John","Jane"];

//removes 1 value, starting at index 1, then inserts before index 1 Frida and Bella, and outputs the removed value
x = names.splice(1,1,"Frida","Bella");
//output names = ["Daniel","Frida","Bella","Jane"]
names = ["Daniel","John","Jane"];