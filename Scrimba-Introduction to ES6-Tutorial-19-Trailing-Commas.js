function add(param1,){
  const example = {
    name: 'Dylan',//before this comman would yield an error
  };
  console.log(example);
};

add();
//output: Object {name: "Dylan"}
//in the past, if you had a comma that didn't follow anything, you'd get an error