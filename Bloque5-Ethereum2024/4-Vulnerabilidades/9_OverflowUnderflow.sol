// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "./SafeMath.sol";

contract OverflowUnderflow {
    function overflowExample(uint8 _val) public pure returns (uint8) {
        uint8 maxValue = 255;
        maxValue += _val;
        return maxValue;
    }

    function underflowExample(uint8 _val) public pure returns (uint8) {
        uint8 minValue = 0;
        minValue -= _val;
        return minValue;
    }
}

contract OverflowUnderflowOptimizado {
    using SafeMath for uint8;

    function overflowExample(uint8 _val) public pure returns (uint8) {
        uint8 maxValue = 255;
        maxValue = uint8(maxValue.add(_val));
        return maxValue;
    }

    function underflowExample(uint8 _val) public pure returns (uint8) {
        uint8 minValue = 0;
        minValue = uint8(minValue.sub(_val));
        return minValue;
    }
}