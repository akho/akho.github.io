with import <nixpkgs> {};
let gems = bundlerEnv {
  name="jekyll stuff";
  inherit ruby;
  gemdir = ./.;
};
in mkShell {
  buildInputs = [ gems jekyll ];
}
