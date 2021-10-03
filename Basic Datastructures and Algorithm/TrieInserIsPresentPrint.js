//https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-trie-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};
var Trie = function () {
  this.root = new Node();

  this.add = (wordParam) => {
    console.log(wordParam);
    function addWord(word, root) {
      if (word) {
        if (Object.keys(root.keys).includes(word[0])) {
          let letter = word[0];
          addWord(word.substring(1), root.keys[letter]);
        }
        else {
          const node = new Node();

          let letter = word[0];
          root.keys[letter] = node;

          if (word.length === 1) {
            node.setEnd();
          }
          addWord(word.substring(1), root.keys[letter]);
        }
      }
    }
    addWord(wordParam, this.root);

  };
  this.isWord = (word) => {
    let root = this.root;
    while (word) {
      let firstletter = word[0];
      if (Object.keys(root.keys).includes(firstletter)) {
        if (word.length === 1) {
          if (!root.keys[firstletter].isEnd()) {
            return false;
          }
        }
        word = word.substring(1);
      } else {
        return false;
      }
      root = root.keys[firstletter];
    }
    return true;

  }
  this.print = () => {
    const words = [];
    function retrieve(root, word) {
      if (Object.keys(root.keys).length != 0) {
        for (let letter of Object.keys(root.keys)) {
          retrieve(root.keys[letter], word.concat(letter));
        }
        if (root.isEnd()) {
          words.push(word);
        }
      }
      else {
        word.length > 0 ? words.push(word) : undefined;
        return;
      }
    }
    retrieve(this.root, "");
    return words;
  }

  // Only change code above this line
};
let x = new Trie();
x.add("box")
x.add("the")
x.add("bob")
console.log(x.print());