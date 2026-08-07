# Single Number (Bit Manipulation - XOR)

## Idea

Every number appears twice except one.

Use XOR because:

a ^ a = 0
a ^ 0 = a

Duplicates cancel each other.

Example:

[4,1,2,1,2]

4 ^ 1 ^ 2 ^ 1 ^ 2

Rearrange:

4 ^ (1 ^ 1) ^ (2 ^ 2)

= 4 ^ 0 ^ 0

= 4

## Pattern

When:
- Every number appears twice
- One number appears once
- Need O(1) extra space

Think:

XOR

## Complexity

Time:
O(n)

Space:
O(1)
