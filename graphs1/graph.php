<?php // content="text/plain; charset=utf-8"
require_once ('../jpgraph/jpgraph.php');
require_once ('../jpgraph/jpgraph_line.php');
include('dataGraph.php');
$datay1 = $_SESSION['sendD1'];
$datay2 = array(0);
$a = $_GET['k1']+1;
// Setup the graph
$graph = new Graph(900,600);
$graph->SetScale("textlin");
$graph->SetShadow();
$graph->img->SetAntiAliasing(false);
$graph->title->Set('Cumulative Number / Time in years - Area '.$a);
$graph->subtitle->Set('');
$graph->xaxis->title->Set('Year');
$graph->yaxis->title->Set('Cumulative number of earthquakes');
$graph->SetBox(false);
$graph->img->SetAntiAliasing();
$graph->yaxis->HideZeroLabel();
$graph->yaxis->HideLine(false);
$graph->yaxis->HideTicks(false,false);
$graph->xgrid->Show();
$graph->xgrid->SetLineStyle("solid");
$graph->xaxis->SetTickLabels( $_SESSION['xyearD1'] );
$graph->xgrid->SetColor('#E3E3E3');
$graph->legend->SetFrameWeight(1);
$graph->img->SetMargin(40,30,20,40);
$graph->SetMargin(40,20,20,40);
$graph->title->SetFont(FF_FONT1,FS_BOLD);
$graph->yaxis->title->SetFont(FF_FONT1,FS_BOLD);
$graph->xaxis->title->SetFont(FF_FONT1,FS_BOLD);
$graph->xaxis->SetTextLabelInterval(1);
$graph->xaxis->SetLabelAngle(30);
// Create the first line
$p1 = new LinePlot($datay1);
$graph->Add($p1);
$p1->value->SetFormat('%d');
$p1->value->Show();
$p1->SetColor("#6495ED");
$p1->SetWeight(12);
$p1->SetCenter();
$p1->SetFillColor('orange@0.7');

// Create the second line
$p2 = new LinePlot($datay2);
$graph->Add($p2);

// Output line
$graph->Stroke();

?>