function getMenu(){
	

	return (

		<div class="container-menu" style="">
                <div class="row">
                    
                        <div class="col menuCol">
        
                            <div class="row menuRow" onClick="loadData(0)">
                                <div class="col-8 mapOption">House Type</div>
                                <div class="col-4 mapOption">
                                     <object id="menuButton1a"  width="20" data="/assets/svg/plotplan-menu-icon.svg" type="image/svg+xml"></object>
                                </div>
                            </div>

                            <div class="row menuRow d-md-none" onClick="loadData(1)">
                                <div class="col-8 mapOption">Not Yet Released</div>
                                <div class="col-4 mapOption">
                                     <object id="menuButton2"  width="20" data="/assets/svg/plotplan-menu-icon.svg" type="image/svg+xml"></object>
                                </div>
                            </div>

                            <div class="row menuRow d-md-none" onClick="loadData(2)">
                                <div class="col-8 mapOption">For Sale</div>
                                <div class="col-4 mapOption">
                                    <object id="menuButton3"  width="20" data="/assets/svg/plotplan-menu-icon.svg" type="image/svg+xml"></object>
                                </div>
                            </div>

                        </div>
                        <!-- col 2 on desktop -->
                        <div class="col d-none d-md-block">
                        
                          <!--   <div class="row menuRow" onClick="loadData(1)">
                            <div class="col-8 mapOption">Not Yet Released</div>
                            <div class="col-4 mapOption"><div class="circleEmpty rounded-circle"></div><div class="circleFull rounded-circle mapButton2"></div></div>
                            </div> -->

                        </div>
                        <!-- col 3 on desktop -->
                        <div class="col d-none d-md-block">
                        
                           <!--  <div class="row menuRow" onClick="loadData(2)">
                            <div class="col-8 mapOption">For Sale</div>
                            <div class="col-4 mapOption"><div class="circleEmpty rounded-circle"></div><div class="circleFull rounded-circle mapButton3"></div></div>
                            </div> -->

                        </div>
                        <!-- col 4 on desktop -->
                        <div class="col d-none d-md-block">
                        
                           <!--  <div class="row menuRow" onClick="loadData(3)">
                            <div class="col-8 mapOption">Reserved</div>
                            <div class="col-4 mapOption"><div class="circleEmpty rounded-circle"></div><div class="circleFull rounded-circle mapButton4"></div></div>
                            </div> -->

                        </div>
                        <!-- col 5 on desktop -->
                        <div class="col d-none d-md-block">
                        
                           <!--  <div class="row menuRow" onClick="loadData(4)">
                            <div class="col-8 mapOption">Sold</div>
                            <div class="col-4 mapOption"><div class="circleEmpty rounded-circle"></div><div class="circleFull rounded-circle mapButton5"></div></div>
                            </div> -->

                        </div>

                        <!-- col 2 on mobile -->
                        <div class="col d-block d-md-none menuCol">
                        
                            <div class="row menuRow" onClick="loadData(3)">
                                <div class="col-8 mapOption">Reserved</div>
                                <div class="col-4 mapOption">
                                     <object id="menuButton4"  width="20" data="/assets/svg/plotplan-menu-icon.svg" type="image/svg+xml"></object>
                                </div>
                            </div>

                            <div class="row menuRow d-md-none" onClick="loadData(4)">
                                <div class="col-8 mapOption">Sold</div>
                                <div class="col-4 mapOption">
                                     <object id="menuButton5"  width="20" data="/assets/svg/plotplan-menu-icon.svg" type="image/svg+xml"></object>
                                </div>
                            </div>

                            <div class="row menuRow d-md-none">
                                <div class="col-8 mapOption buttonHidden">Empty</div>
                                <div class="col-4 mapOption"><div class="circleEmpty rounded-circle buttonHidden"></div><div class="circleFull rounded-circle mapButton5 buttonHidden"></div></div>
                            </div>

                        </div>
                    </div>

                </div>
           </div>
	)


}