/* Develoment environment */
{ pkgs ? import <nixpkgs> {} }:
with pkgs;

stdenv.mkDerivation {
  name = "emoji-diary";
  buildInputs = [
    python3
    sass
    git
  ];
}
