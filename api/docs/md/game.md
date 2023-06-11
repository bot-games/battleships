## The rules

Each of the two players has a field with size 10x10 cells with different sizes ships on it. For example:

        Your field                      Opponent field
    A┃   *   * * *                 A┃ *   * * * *   * *  
    B┃               *             B┃ *                  
    C┃               *   *         C┃ *   * *       * * *
    D┃     *             *         D┃           *        
    E┃     *             *         E┃           *        
    F┃                   *         F┃                    
    G┃           *                 G┃ *   *   *     *    
    H┃     * *       *             H┃                    
    I┃                             I┃                    
    J┃   * *   *                   J┃                    
     ┗━━━━━━━━━━━━━━━━━━━━          ┗━━━━━━━━━━━━━━━━━━━━
       0 1 2 3 4 5 6 7 8 9            0 1 2 3 4 5 6 7 8 9

In first turn (tick #0) you can set up your ships (call action [setup](#/RPC%20methods/action_setup_v1)) 
or leave random positions (call action [skip](#/RPC%20methods/action_skip_v1)).  
If you want to change ships position, you have to place 10 ships with different size:

* **1** ship with size 4;
* **2** ships with size 3;
* **3** ships with size 2;
* **4** ships with size 1.

Ships can be placed horizontal or vertical. Also there must be a space among them.

Since second turn your objection is to destroy all opponent ships faster than you'll lose yours.

## How to start a game

1. Call the method **[join](#/RPC%20methods/join_v1)**.
2. Call the method **[wait_turn](#/RPC%20methods/wait_turn_v1)** to receive the current game state.
3. Call one of available action method (you have 5 seconds).
4. Go to step 2.

For more information see methods description below.

## The source code and bot examples

You can find them in the [GitHub repository](https://github.com/bot-games/battleships).

## LocalRunner

See [README](https://github.com/bot-games/battleships/tree/master/cmd/localrunner)