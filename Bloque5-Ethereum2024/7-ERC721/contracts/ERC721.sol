// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../contratos/IERC165.sol";
import "../interfaces/IERC721.sol";
import "../interfaces/IERC721Receiver.sol";

contract ERC721 is IERC721, ERC165 {
    mapping(uint256 => address) private _owners;
    mapping(address => uint256) private _balance;
    mapping(uint256 => address) private _tokenApprovals;
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    function balanceOf(address owner) public view virtual override returns (uint256) {
        require(owner != address(0), "ERC721 Error: Address zero");
        return _balance(owner);
    }

    function ownerOf(uint256 tokenId) external view override returns (address owner){
        address owner = _owners[tokenId];
        require(owner != address(0), "ERC721 Error: Address zero");
        return owner;
    }

    function safeTransferFrom(address from, address to, uint256 tokenId) external override {
        safeTransferFrom(from, to, tokenId, "");
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external override {
        // Verifica di el remitente está aprobado o es el propietario del token.
        require(_isApprovedOrOwner(msg.sender, tokenId), "ERC721 ERROR: You are not the owner or have no permissions.");
        // Llama a la función interna _safeTransfer para realizar la transferencia segura.
        _safeTransfer(from, to, tokenId, _data);
    }

    function _safeTransfer(address from, address to, uint256 tokenId, bytes memory _data) internal virtual {
        // Realiza la transferencia del token
        _transfer(from, to, tokenId);
        // Verifica si la dirección 'to' implementa la interfaz IERC721Receiver.
        require(_checkOnERC721Received(from, to, tokenId, _data), "ERC721 ERROR: transfer to non IERC721Receiver implementer");
    }

    function transferFrom(address from, address to, uint256 tokenId) external override {
        require(_isApprovedOrOwner(msg.sender, tokenId), "ERC721 ERROR: You are not the owner or have no permissions.");
        _transfer(from, to, tokenId);
    }

    function _isApprovedOrOwner(address from, address to, uint256 tokenId) internal view virtual returns (bool) {
        require(_exists(tokenId), "ERC721 ERROR: Token ID does not exist.");
        address owner = ownerOf(tokenId);
        return (from == owner || getApproved(tokenId) == from || isApprovedForAll(owner, from));
    }

    function _transfer(address from, address to, uint256 tokenId) internal virtual {
        require(ownerOf(tokenId) == from, "ERC721 ERROR: Token ID does not exist.");
        require(to != address(0), "ERC721 ERROR: Address zero.");

        // Función intermedia para generar lógica de negocio antes de transferir el token
        _beforeTokenTransfer(from, to, tokenId);

        _approve(address(0), tokenId);

        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(from, to, tokenId);
    }

    function approve(address to, uint256 tokenId) external override {
        address owner = ownerOf(tokenId);
        require(to != owner, "ERC721 ERROR: Addresses are equal");
        require(msg.sender == owner || isApprovedForAll(owner, msg.sender), "ERC721 ERROR: You are not the owner or have no permissions.");

        _approve(to, tokenId);
    }

    function _approve(address to, uint256 tokenId) internal virtual {
        _tokenApprovals[tokenId] = to;
        emit Approval(ownerOf(tokenId), to, tokenId);
    }

    function getApprove(uint256 tokenId) external view override returns (address operator){
        require(_exists(tokenId), "ERC721 ERROR: Token ID does not exist.");
        return _tokenApprovals[tokenId];
    }

    function setApprovalForAll(address operator, bool approved) external override {
        require(operator != msg.sender, "ERC721 ERROR: Operator address must be different.");
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    function isApprovedForAll(address owner, address operator) external view override returns (bool){
        return _operatorApprovals[owner][operator];
    }

    // FUNCIONES ADICIONALES

    function _safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId, "");
    }

    function _safeMint(address to, uint256 tokenId, bytes memory _data) public {
        _mint(to, tokenId);
        require(_checkOnERC721Received(address(0), to, tokenId, _data), "ERC721 ERROR: transfer to non IERC721Receiver implementer");
    }

    function _mint(address to, uint256 tokenId) internal virtual {
        require(to != address(0), "ERC721 ERROR: Address zero.");
        require(!_exists(tokenId), "ERC721 ERROR: Token already minted.");
        _beforeTokenTransfer(address(0), to, tokenId);

        _balance[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(address(0), to, tokenId);
    }

    function _checkOnERC721Received(address from, address to, uint256 tokenId, bytes memory _data) private returns (bool) {
        if (isContract(to)) {
            try IERC721Receiver(to).onERC721Received(msg.sender, from, tokenId, _data) returns (bytes4 retval){
                return retval == IERC721Receiver.onERC721Receiver.selector;
            } catch (bytes memory reason) {
                if (reason.length == 0) {
                    revert("ERC721: Transferencia a implementador no ERC721Receiver");
                } else {
                    assembly {
                        revert(add(32, reason), mload(reason))
                    }
                }
            }
        } else {
            return true;
        }
    }

    function isContract(address _addr) private view returns (bool) {
        uint32 size;

        assembly {
            size := extcodesize(_addr)
        }

        return (size > 0)
    }
}