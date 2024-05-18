{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-20_x # Replace with your required Node.js version
    pkgs.nodePackages.nodemon
    pkgs.mysql
    pkgs.sudo
  ];

  shellHook = ''
    echo "Welcome to the Nix shell!"
  '';
}
